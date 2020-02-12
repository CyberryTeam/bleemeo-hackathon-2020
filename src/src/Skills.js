import React from 'react'

function Skills(props) {
    return (
        <div>
            <h1 className="text-center my-5">Compétences</h1>
            <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Compétences et Niveau</th>
            <th scope="col">Réalisations</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row"></th>
            <td>Développeur en C</td>
            <td>Très à l'aise avec le C dû à la réalisation de plusieurs mini-projets comme le minishell</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>Développeur en python</td>
            <td>Habitué avec ce langage que j'ai appris avec nos exercices de maths.</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>Débuggeur GDB et Valgrind</td>
            <td>Ces deux programmes utiles et puissants que je connais très bien.</td>
          </tr>
        </tbody>
      </table>
        </div>
    )
}

export default Skills;