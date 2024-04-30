function mealPlanWindow() {

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const goal = document.getElementById('goal').value;

        // if statement to validate user email input
        if (!emailValidate(email)) {
            alert('Please enter a valid email address.')
            return;
        };

// Validate Email Function
function emailValidate (email) {
    const emailRegex = /^[^\s@]+@[^\s@\+\.[^s@]+/;
    return emailRegex.test(email);
}
    // Gets meal plan inputs from user
    const day = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const meal = ['breakfast', 'snack1', 'lunch', 'snack2', 'dinner'];
    let mealPlan = '';

    day.forEach(day => {
        mealPlan += `<h3>${day}</h3>`;
        meal.forEach(meal => {
            const input = document.getElementById(`${day.toLowerCase()}-${meal}`).value;
            mealPlan += `<p><strong>${meal.charAt(0).toUpperCase() + meal.slice(1)}:</strong> ${input}</p>`;
        });
    });

const newWindow = window.open('', 'Meal Plan');
newWindow.document.write(`
    <html>
    <head>
        <title>Customized Meal Plan</title>
    </head>
    <body>
        <h1>${name}'s Weekly Meal Plan</h1>
        <p><strong>Email: </strong> ${email}</p>
        <p><strong>Weekly Goal: </strong>${goal}</p>
        ${mealPlan};
    </body>
    </html>
`);

// Clear, print, and download buttons
const buttons = `
<button value="print" onclick = "window.print()">Print</button>
<button onclick = "download('mealPlan')">Download</button>`;

newWindow.document.body.innerHTML += buttons;
};

function download() {
    const content = document.getElementById('mealPlan').innerHTML;
    const blob = new Blob([content], {type: 'text/html'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'mealPlan.txt';
    document.body.appendChild(a);
    a.click(mealPlan);
    URL.revokeObjectURL(url);
    document.body.removeChild(a);
};
