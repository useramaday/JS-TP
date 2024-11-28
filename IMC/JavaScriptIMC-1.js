<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Calcul de l'IMC</title>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
      crossorigin="anonymous"
    />
    <link rel="icon"
    href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/svgs/solid/weight-scale.svg">
  </head>
  <style>
    .bg-gris {
      background-color: #ccc;
    }
  </style>
  <body>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <a class="navbar-brand" href="#">
          <i class="fa-solid fa-weight-scale"></i>
          Calcul de l'IMC</a>
      </div>
    </nav>
    <div class="container">
      <div class="row">
        <div class="col-4 pt-4">
          <h1 class="h3">Calculer votre IMC</h1>
          <label for="poids">Poids en kg.</label>
          <input
            id="poids"
            aria-label="Poids"
            class="form-control"
            placeholder="Poids en kg."
            value="90"
          />
          <label for="taille" class="mt-3">Taille en mètre</label>
          <input
            id="taille"
            aria-label="Taille"
            class="form-control"
            placeholder="taille en mètre"
            value="1.8"
          />

          <button id="calculer" class="btn btn-success mt-3 col-12">
            <i class="fa-solid fa-weight-scale"></i> Calculer
          </button>

          <div id="resultat" class="alert my-3 alert-secondary">
            <div>IMC : 27.8</div>
            <div>surpoids</div>
            <div>Objectif : 81.0kg (-9.0 kg)</div>
          </div>
        </div>
      </div>
    </div>
    <footer class="py-5 bg-dark">
      <div class="container px-4 px-lg-5">
        <p class="m-0 text-center text-white">
          Copyright &copy; Seven Valley 2024
        </p>
      </div>
    </footer>

    <script>
      document.getElementById('calculer').addEventListener('click', function() {
        const poids = parseFloat(document.getElementById('poids').value);
        const taille = parseFloat(document.getElementById('taille').value);

        if (isNaN(poids) || isNaN(taille) || taille <= 0) {
          alert('Veuillez entrer des valeurs valides pour le poids et la taille.');
          return;
        }

        const imc = poids / (taille * taille);
        let categorie = '';
        let objectif = '';

        if (imc < 18.5) {
          categorie = 'Insuffisance pondérale';
          objectif = 'Objectif : ' + (18.5 * taille * taille).toFixed(1) + 'kg (' + (18.5 * taille * taille - poids).toFixed(1) + ' kg)';
        } else if (imc >= 18.5 && imc < 25) {
          categorie = 'Poids normal';
          objectif = 'Vous êtes dans la fourchette de poids normal.';
        } else if (imc >= 25 && imc < 30) {
          categorie = 'Surpoids';
          objectif = 'Objectif : ' + (25 * taille * taille).toFixed(1) + 'kg (' + (25 * taille * taille - poids).toFixed(1) + ' kg)';
        } else {
          categorie = 'Obésité';
          objectif = 'Objectif : ' + (25 * taille * taille).toFixed(1) + 'kg (' + (25 * taille * taille - poids).toFixed(1) + ' kg)';
        }

        document.getElementById('resultat').innerHTML = `
          <div>IMC : ${imc.toFixed(1)}</div>
          <div>${categorie}</div>
          <div>${objectif}</div>
        `;
      });
    </script>
  </body>
</html>
