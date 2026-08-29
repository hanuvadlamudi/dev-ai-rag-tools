package devPilot.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
import java.util.UUID;
import devPilot.backend.entity.User;

public interface UserRepository extends JpaRepository<User, UUID> {
        Optional<User> findByGithubId(String githubId);
}
