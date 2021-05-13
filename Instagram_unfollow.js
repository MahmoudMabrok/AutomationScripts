  // node list based on class `sqdOP  L3NKy    _8A5w5    `
  const unfollowBtns = document.querySelectorAll('[class="sqdOP  L3NKy    _8A5w5    "]');

  // iterate over buttons then perform click()
  unfollowBtns.forEach((el) => {
    el.click();
    let confirmUnfollowBtn = document.querySelector(
      '[class="aOOlW -Cab_   "]'
    );
    confirmUnfollowBtn.click();
  });
