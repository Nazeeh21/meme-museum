import { Box } from "@chakra-ui/react";
import { useOthers, useSelf } from "@y-presence/react";
import { useEffect } from "react";

type CursorPresence = {
  x: number;
  y: number;
};

export default function Room() {
  const { self, setPresence } = useSelf<CursorPresence>();
  const others = useOthers<CursorPresence>();

  useEffect(() => {
    setPresence({ x: 0, y: 0 });
  }, [setPresence]);

  return (
    <div>
      Client id: {self.id}
      Presence: {self.presence}
      Number of other users: {others.length}
      {others.map(({ id, presence }) => {
        if (!presence) return null;

        return (
          <Box key={id}>
            Other user id: {id}
            x-Presence: {presence.x}
            y-Presence: {presence.y}
          </Box>
        );
      })}
    </div>
  );
}
