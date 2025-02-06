document.addEventListener("DOMContentLoaded", () => {
    const orderButton = document.getElementById("order");
    const notesArea = document.getElementById("notes");
    const quantityNum = document.getElementById("quantity");
    const flavorButtons = document.querySelectorAll('input[name="topping"]');
    
    orderButton.addEventListener("click", (event) => {
        // prevent the form from being submitted automatically
        event.preventDefault();

        // get the value of notes
        const notes = notesArea.value.toLowerCase();

        // check if it includes vegan
        if (notes.includes("vegan")) {
            alert("Cheesecake contains dairy!");
            return;
        }

        // if no vegan allow order to continue
        const quantity = quantityNum.value;
        let flavor = "none";

        // get selected flavor
        flavorButtons.forEach((radio) => {
            if (radio.checked) {
                flavor = radio.value;
            }
        });

        // generate confirmation message
        const confirmationMessage = `
            <h2>Thank you! Your order has been placed</h2>
            <h3>Order Details:</h3>
            <ul>
                <li><strong>Topping:</strong> ${flavor}</li>
                <li><strong>Quantity:</strong> ${quantity}</li>
                <li><strong>Notes:</strong> ${notes}</li>
            </ul>
        `;

        // replace form with message
        const formSection = document.getElementById("form");
        formSection.innerHTML = confirmationMessage;
    });

    // dropdown menu only on hover
    $(".dropdown").hover(
        function () {
            $(this).find(".dropdown-content").show();
        },
        function () {
            $(this).find(".dropdown-content").hide();
        }
    );

    // update value when selected
    $(".month").click(function () {
        const selectedMonth = $(this).data("month");
        $(".widget").text(selectedMonth);
    });
});
