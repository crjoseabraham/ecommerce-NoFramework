<?php
namespace Controller;

use \Model\Product;
use \Model\Cart;
use \Model\Session;
use \Model\User;
use \Model\Payment;

/**
 * Pages Controller
 * Only displays the views for the GET requests
 */
class Pages
{
  /**
   * Displays main page
   */
  public function index() : void
  {
    renderView('index.html');
  }

  /**
   * Displays 'Store' page with all products
   */
  public function store() : void
  {
    renderView('store.html', Product::getAll());
  }

  /**
   * Displays login form
   */
  public function login() : void
  {
    // Hide login page if user is already logged in
    if (Session::getUser())
      redirect('/store');
    else
      renderView('login.html');
  }

  /**
   * Displays register form
   */
  public function register() : void
  {
    // Hide register page if user is already logged in
    if (Session::getUser())
      redirect('/store');
    else
      renderView('register.html');
  }

  /**
   * Displays profile page
   */
  public function profile() : void
  {
    if (Session::getUser())
      renderView('profile.html', [Payment::getUserOrders(), User::getErrors()]);
    else
      redirect('/home');
  }
}