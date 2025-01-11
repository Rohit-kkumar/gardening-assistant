// Sample data for growth stages
const growthStages = [
    { stage: 'Seedling', description: '1-2 weeks' },
    { stage: 'Sapling', description: '2-4 weeks' },
    { stage: 'Mature', description: '4+ weeks' }
];

// Populate the growth stage timeline
const timeline = document.querySelector('.timeline');

growthStages.forEach(stage => {
    const stageElement = document.createElement('div');
    stageElement.classList.add('timeline-stage');
    stageElement.innerHTML = `
        <h4>${stage.stage}</h4>
        <p>${stage.description}</p>
    `;
    timeline.appendChild(stageElement);
});

// Show problem description when clicked
function showProblem(problem) {
    const problemDescription = document.getElementById('problem-description');
    switch (problem) {
        case 'Yellow Leaves':
            problemDescription.innerHTML = "Yellow leaves can be a sign of overwatering or low nutrients. Check soil moisture and fertilize if needed.";
            break;
        case 'Wilting Plants':
            problemDescription.innerHTML = "Wilting can indicate underwatering or root rot. Ensure proper watering habits.";
            break;
        case 'Pests and Diseases':
            problemDescription.innerHTML = "Look for unusual spots or webs. Treat with appropriate insecticides or fungicides.";
            break;
        case 'Overwatering':
            problemDescription.innerHTML = "Too much water can lead to root rot. Allow the soil to dry out before watering again.";
            break;
        case 'Underwatering':
            problemDescription.innerHTML = "Insufficient water can cause stress. Water thoroughly and regularly.";
            break;
        default:
            problemDescription.innerHTML = "";
    }
}

// Care reminder setup
const careReminderForm = document.querySelector('.care-reminder form');
careReminderForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const plantType = careReminderForm.elements['plant-type'].value;
    const wateringFrequency = careReminderForm.elements['watering-frequency'].value;

    const reminder = `Set a reminder to water your ${plantType} every ${wateringFrequency} days.`;
    alert(reminder);
});