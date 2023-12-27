const table = document.getElementById("myTable");

        table.addEventListener("click", function(e) {
            const target = e.target;
            if (target.tagName === "TD") {
                const cellText = target.textContent.trim();
                target.innerHTML = `<textarea>${cellText}</textarea>
                                    <button class="save-btn">Save</button>
                                    <button class="cancel-btn">Cancel</button>`;
            } else if (target.classList.contains("save-btn")) {
                const textarea = target.previousElementSibling;
                const cell = textarea.parentElement;
                cell.textContent = textarea.value;
            } else if (target.classList.contains("cancel-btn")) {
                const cell = target.parentElement;
                const originalText = cell.firstChild.textContent.trim();
                cell.innerHTML = originalText;
            }
        });