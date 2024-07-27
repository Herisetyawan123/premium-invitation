// open invitation
const openInvitation = document.getElementById("open-invitation");
const coverInvitation = document.getElementById("cover-invitation");

openInvitation.addEventListener("click", () => {
  coverInvitation.classList.toggle("hidden");
  console.log("opened");
});
