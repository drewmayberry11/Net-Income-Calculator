function calculateNetPay() {
	const state = document.getElementById("state").value.toUpperCase();
	const income = parseFloat(document.getElementById("income").value);
	const monthlyPhone = parseFloat(document.getElementById("phone").value) || 0;
	const monthlyInternet =
		parseFloat(document.getElementById("internet").value) || 0;
	const monthlyDebt = parseFloat(document.getElementById("debt").value) || 0;
	const mortgage = parseFloat(document.getElementById("mortgage").value) || 0;
	const utilities = parseFloat(document.getElementById("utilities").value) || 0;
	const yearlySavings =
		parseFloat(document.getElementById("savings").value) || 0;

	const stateTaxRates = {
		TX: 0.0,
		CO: 0.044,
	};

	if (!stateTaxRates.hasOwnProperty(state)) {
		alert("Invalid state. Please enter TX or CO.");
		return;
	}

	const socialSecurityRate = 0.062;
	const stateTaxRate = stateTaxRates[state];

	const socialSecurityYearly = income * socialSecurityRate;
	const phoneYearly = monthlyPhone * 12;
	const yearlyMortgage = mortgage * 12;
	const yearlyUtilities = utilities * 12;
	const yearlyInternet = monthlyInternet * 12;
	const yearlyOther = 0;
	const monthlySavings = yearlySavings / 12;
	const yearlyDebt = monthlyDebt * 12;
	const yearlyIncomeTax = income * stateTaxRate;

	const yearlyBills =
		socialSecurityYearly +
		phoneYearly +
		yearlyMortgage +
		yearlyUtilities +
		yearlyInternet +
		yearlyOther +
		yearlySavings +
		yearlyDebt +
		yearlyIncomeTax;

	const totalNet = income - yearlyBills;
	const netMonth = totalNet / 12;
	const netBiMonthly = totalNet / 24;
	const netWeekly = totalNet / 52;

	document.getElementById("results").innerHTML = `
        <h2>Net Pay Results</h2>
        <p>Monthly Net: $${netMonth.toFixed(2)}</p>
        <p>Weekly Net: $${netWeekly.toFixed(2)}</p>
        <p>Bi-Monthly Net: $${netBiMonthly.toFixed(2)}</p>
        <p>Savings a Month: $${monthlySavings.toFixed(2)}</p>
    `;
}
