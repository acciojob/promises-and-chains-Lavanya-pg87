document.getElementById('ageForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;

    if (name === '' || age === '') {
        alert('Inputs cannot be empty.');
        return;
    }

    new Promise((resolve, reject) => {
        setTimeout(() => {
            if (age >= 18) {
                resolve();
            } else {
                reject();
            }
        }, 4000);
    })
    .then(() => {
        alert(`Welcome, ${name}. You can vote.`);
    })
    .catch(() => {
        alert(`Oh sorry, ${name}. You aren't old enough.`);
    });
});
