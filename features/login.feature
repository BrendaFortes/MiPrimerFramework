Feature: Prueba de pagina de login

Scenario: Prueba de pagina de login y vista del boton log in
    Given Estoy en la pagina principal
    When Voy a la pagina de log in
    And Escribo el nombre de usuario y contraseña
    Then Veo el boton de log in 

