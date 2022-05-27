function toggle(element) {
    const toggledClass = element.dataset.classToggled ?? null;

    (toggledClass && element?.classList.contains(toggledClass))
    ? element.classList.remove(toggledClass)
    : element.classList.add(toggledClass);
}

function untoggleAll(element, toggledClass) {
    const toggledChildren = element.getElementsByClassName(toggledClass);
    for (const el of toggledChildren) {
        el?.classList.remove(toggledClass);
    }
}

// TODO: check for media query; enable toggling only if window is mobile-size
// Make sure the check is run EVERY TIME the click happens
// Don't want tablet users to reload the page every time they use a narrow window in their browser

const toggleElements = document.getElementsByClassName('toggle');

document.addEventListener("click", (ev) => {
    // console.log("target: ", ev.target);

    let targetFound = false;
    for (el of toggleElements) {
        // Check if the onClick's target is an immediate child of any elements that have .toggle class
        if (el.firstElementChild === ev.target) {
            // console.log("container: ", el);
            toggle(el);
        }
        if (el.contains(ev.target)) {
            targetFound = true;
        }
    }

    if (!targetFound) {
        untoggleAll(document, "toggled");
    }
})
