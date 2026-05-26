(function () {
            var COLS = 8;
            var ROWS = 2;
            var col = 0;
            var row = 0;

            var container = document.getElementById('container');
            var navGrid = document.getElementById('navGrid');
            var hintDown = document.getElementById('hintDown');
            var hintUp = document.getElementById('hintUp');
            var hintLeft = document.getElementById('hintLeft');
            var hintRight = document.getElementById('hintRight');
            var kbHint = document.getElementById('kbHint');
            var mobTitle = document.getElementById('mobTitle');
            var mobPrev = document.getElementById('mobPrev');
            var mobNext = document.getElementById('mobNext');

            var sectionNames = ['Co-Pilot', 'Who', 'Why', 'What', 'When', 'Stack', 'Investment', 'Querencia'];

            for (var r = 0; r < ROWS; r++) {
                for (var c = 0; c < COLS; c++) {
                    var dot = document.createElement('button');
                    dot.className = 'nav-dot';
                    dot.dataset.col = c;
                    dot.dataset.row = r;
                    dot.title = r === 0 ? 'Video' : 'Text';
                    (function (cc, rr) {
                        dot.addEventListener('click', function () { goTo(cc, rr); });
                    })(c, r);
                    navGrid.appendChild(dot);
                }
            }

            function goTo(c, r) {
                if (c < 0 || c >= COLS || r < 0 || r >= ROWS) return;
                col = c; row = r;
                update();
                dismissHint();
            }

            function update() {
                container.style.transform = 'translate(' + (-col * 100) + 'vw, ' + (-row * 100) + 'vh)';

                navGrid.querySelectorAll('.nav-dot').forEach(function (d) {
                    d.classList.toggle('active', +d.dataset.col === col && +d.dataset.row === row);
                });

                hintDown.classList.toggle('hidden', row >= ROWS - 1);
                hintUp.classList.toggle('hidden', row <= 0);
                hintLeft.classList.toggle('hidden', col <= 0);
                hintRight.classList.toggle('hidden', col >= COLS - 1);

                mobTitle.textContent = (col + 1) + ' / ' + COLS + '  ' + sectionNames[col];
                mobPrev.classList.toggle('disabled', col <= 0);
                mobNext.classList.toggle('disabled', col >= COLS - 1);
            }

            function dismissHint() {
                if (!kbHint.classList.contains('fade')) {
                    kbHint.classList.add('fade');
                    setTimeout(function () { kbHint.style.display = 'none'; }, 600);
                }
            }

            document.addEventListener('keydown', function (e) {
                switch (e.key) {
                    case 'ArrowRight': goTo(col + 1, row); e.preventDefault(); break;
                    case 'ArrowLeft': goTo(col - 1, row); e.preventDefault(); break;
                    case 'ArrowDown': goTo(col, row + 1); e.preventDefault(); break;
                    case 'ArrowUp': goTo(col, row - 1); e.preventDefault(); break;
                }
            });

            var lastWheel = 0;
            var COOLDOWN = 700;
            document.addEventListener('wheel', function (e) {
                var now = Date.now();
                if (now - lastWheel < COOLDOWN) return;
                var ax = Math.abs(e.deltaX);
                var ay = Math.abs(e.deltaY);
                if (ax > ay && ax > 25) {
                    if (e.deltaX > 0) goTo(col + 1, row);
                    else goTo(col - 1, row);
                    lastWheel = now;
                } else if (ay > ax && ay > 25) {
                    if (e.deltaY > 0) goTo(col, row + 1);
                    else goTo(col, row - 1);
                    lastWheel = now;
                }
                e.preventDefault();
            }, { passive: false });

            var touchX = 0, touchY = 0;
            document.addEventListener('touchstart', function (e) {
                touchX = e.touches[0].clientX;
                touchY = e.touches[0].clientY;
            }, { passive: true });

            document.addEventListener('touchend', function (e) {
                var dx = e.changedTouches[0].clientX - touchX;
                var dy = e.changedTouches[0].clientY - touchY;
                var ax = Math.abs(dx), ay = Math.abs(dy);
                if (Math.max(ax, ay) < 50) return;
                if (ax > ay) {
                    if (dx < 0) goTo(col + 1, row);
                    else goTo(col - 1, row);
                } else {
                    if (dy < 0) goTo(col, row + 1);
                    else goTo(col, row - 1);
                }
            }, { passive: true });

            hintDown.addEventListener('click', function () { goTo(col, row + 1); });
            hintUp.addEventListener('click', function () { goTo(col, row - 1); });
            hintLeft.addEventListener('click', function () { goTo(col - 1, row); });
            hintRight.addEventListener('click', function () { goTo(col + 1, row); });
            mobPrev.addEventListener('click', function () { goTo(col - 1, row); });
            mobNext.addEventListener('click', function () { goTo(col + 1, row); });

            setTimeout(function () { dismissHint(); }, 4000);
            update();
        })();
