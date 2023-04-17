package tft.GameBackend.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
public class FriendDTO {
    private Long id;
    private String name;
    private String email;
}
