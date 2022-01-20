// src/App.test.js;
import React from 'react';
import { mount } from '@cypress/react';
import App from './App';

describe('Ecommerce user flow', () => {
  it('Add one product to user cart', () => {
    mount(<App />);
    cy.intercept("GET", '**/api/product').as("getProducts");
    cy.get('.nav-logo a').click();
    cy.wait("@getProducts");
    cy.intercept("GET", '**/api/product/**').as("getProduct");
    cy.get('.products-list_wrapper li:first-child a').click();
    cy.wait("@getProduct");
    cy.get('.product-detail_actions > div:first-child .product-detail_selector_input > div:first-child').click();
    cy.get('#react-select-2-listbox #react-select-2-option-0').click();
    cy.get('.product-detail_actions > div:nth-child(2) .product-detail_selector_input > div:first-child').click();
    cy.get('#react-select-3-listbox #react-select-3-option-0').click();
    cy.intercept("POST", '**/api/cart').as("postCart");
    cy.get('.product-detail_button button').click();
    cy.wait("@postCart");
    cy.get('.nav_cart_amount p ').contains('1');
  });
});