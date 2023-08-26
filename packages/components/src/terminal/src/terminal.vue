<script lang="ts" setup>
import { PropType, onMounted, onUnmounted } from 'vue';
import { Terminal } from 'xterm';
import { WebLinksAddon } from 'xterm-addon-web-links';
import { AttachAddon } from 'xterm-addon-attach';
import 'xterm/css/xterm.css';

let props = defineProps({
  websocket: {
    type: String as PropType<string>,
    required: true,
  }
});

const ELEMENT_ID = 'terminal-container';

let ws: WebSocket;
let terminal: Terminal;

onMounted(() => {
  terminal = new Terminal({
    cols: 80,
    rows: 22,
    convertEol: true,
    cursorBlink: true,
    cursorStyle: 'bar',
    scrollback: 800,
    tabStopWidth: 8,
  });
  ws = new WebSocket(props.websocket);

  terminal.open(document.getElementById(ELEMENT_ID)!);
  terminal.loadAddon(new WebLinksAddon());
  terminal.loadAddon(new AttachAddon(ws));

  terminal.onData((data) => {
    ws.send(data);
  });

  ws.onmessage = (event) => {
    if (ws.CLOSED) {
      return;
    }
    terminal.writeln(event.data);
  };


});

onUnmounted(() => {
  if (!ws.CLOSED) {
    ws.close();
  }
  if (terminal) {
    terminal.dispose();
  }
})


</script>

<template>
  <div class="container">
    <div id="terminal-container"></div>
  </div>
</template>
