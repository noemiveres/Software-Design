package com.utcn.demo.service.security.exceptions;

/**
 * Exception thrown when a non-authenticated user attempts to perform an operation restricted
 * to authenticated users only.
 */
public class AuthenticationRequiredException extends Exception {
}
