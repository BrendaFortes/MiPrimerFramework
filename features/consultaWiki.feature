Feature: Consulta articulo

Scenario: Consulta de un articulo en wikipedia
    Given Estoy en la pagina principal
    When Selecciono barra de busqueda
    And Escribo el nombre del articulo
    And Selecciono el articulo presentado
    Then Veo el ultimo tema del articulo