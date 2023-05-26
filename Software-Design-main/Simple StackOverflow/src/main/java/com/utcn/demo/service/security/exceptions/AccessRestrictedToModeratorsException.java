package com.utcn.demo.service.security.exceptions;

/**
 * Exception thrown when a user with no admin rights attempts to perform an operation restricted
 * to admins only.
 */
public class AccessRestrictedToModeratorsException extends Exception {
}
