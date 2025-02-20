document.getElementById('vpnEncryptionSlider').addEventListener('input', function () {
            document.getElementById('vpnEncryptionValue').innerText = 'Шифрование: ' + this.value + '-bit';
        });

        // Валидация формы
        (function () {
            'use strict'

            // Получаем все формы, к которым мы хотим применить пользовательскую логику валидации Bootstrap
            var forms = document.querySelectorAll('.needs-validation')

            // Loop over them and prevent submission
            Array.prototype.slice.call(forms)
                .forEach(function (form) {
                    form.addEventListener('submit', function (event) {
                        if (!form.checkValidity()) {
                            event.preventDefault()
                            event.stopPropagation()
                        }

                        form.classList.add('was-validated')
                    }, false)
                })
        })()