  function toggleEditForm() {
            const form = document.getElementById('edit-form');
            form.style.display = form.style.display === 'none' || form.style.display === '' ? 'flex' : 'none';
        }

        function saveProfile() {
            const name = document.getElementById('edit-name').value;
            const genre = document.getElementById('edit-genre').value;
            const joined = document.getElementById('edit-joined').value;

            if (name) {
                document.getElementById('profile-name').innerText = name;
            }
            if (genre) {
                document.getElementById('profile-genre').innerText = `Favorite Genre: ${genre}`;
            }
            if (joined) {
                document.getElementById('profile-joined').innerText = `Joined: ${joined}`;
            }

            toggleEditForm();
        }