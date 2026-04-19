def top_users(users, n=3):
    """Return the top n users sorted by score in descending order.

    Args:
        users: List of dicts with 'name' and 'score' keys.
        n: Number of top users to return (default 3).

    Returns:
        List of up to n user dicts, sorted by score descending.
        Users with equal scores are included (may return more than n
        if there are ties at the cutoff).
    """
    if not users:
        return []

    sorted_users = sorted(users, key=lambda u: u["score"], reverse=True)

    if len(sorted_users) <= n:
        return sorted_users

    cutoff_score = sorted_users[n - 1]["score"]
    return [u for u in sorted_users if u["score"] >= cutoff_score]
