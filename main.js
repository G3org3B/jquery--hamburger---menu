

// Con questa funzione jquery faccio comparire il menù a tendina
// quando viene selezionato con un click l'icona hamburger

$('document').ready(function() {

  //aggiungo la classe active che mi fà comparire il burger_menu quando
  // l'utente clicca sull'icona Hamburger

  $('.hamburger_icona a').click(function() {
    $('.burger_menu').addClass('active');
  }),

  // rimuovo la classe active quando l'utente clicca l'icona X
  // cosi facendo scomparire il burger_menu

  $('.exitmenu').click(function() {
    $('.burger_menu').removeClass('active');
  })
});
