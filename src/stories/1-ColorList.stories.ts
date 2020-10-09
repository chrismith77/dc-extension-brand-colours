import { ColorListComponent } from 'src/app/color-list/color-list.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { moduleMetadata } from '@storybook/angular';
import { MatIconModule } from '@angular/material/icon';
import { ColorPreviewComponent } from 'src/app/color-preview/color-preview.component';
import { BrandColor } from 'src/app/model/brand-colors';
import { action } from '@storybook/addon-actions';
import { MatRippleModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export default {
  title: 'Color List',
  component: ColorListComponent,
  decorators: [
    moduleMetadata({
      declarations: [ColorListComponent, ColorPreviewComponent],
      imports: [MatTooltipModule, MatIconModule, MatRippleModule, BrowserAnimationsModule],
    }),
  ],
};

function generateColours(count: number): BrandColor[] {
  const result: BrandColor[] = [];
  for (let i = 0; i < count; i++) {
    const color = Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, '0');
    result.push({
      name: '#' + color,
      color: '#' + color
    });
  }
  return result;
}

export const NormalModeNoColour = () => ({
  component: ColorListComponent,
  props: {
    expanded: true,
    selection: (color) => action(`Selected color: ${color}`),
    colors: {
      name: 'Normal Mode (no color)',
      compact: false,
      colors: []
    }
  },
});

NormalModeNoColour.story = {
  name: 'Normal Mode (no color)',
};

export const NormalModeOneColour = () => ({
  component: ColorListComponent,
  props: {
    expanded: true,
    selection: (color) => action(`Selected color: ${color}`),
    colors: {
      name: 'Normal Mode (1 color)',
      compact: false,
      colors: generateColours(1)
    }
  },
});

NormalModeOneColour.story = {
  name: 'Normal Mode (1 color)',
};

export const NormalModeUnlimited = () => ({
  component: ColorListComponent,
  props: {
    expanded: true,
    selection: (color) => action(`Selected color: ${color}`),
    colors: {
      name: 'Normal Mode (no row limit)',
      compact: false,
      colors: generateColours(32)
    }
  },
});

NormalModeUnlimited.story = {
  name: 'Normal Mode (no row limit)',
};

export const NormalModeSquare = () => ({
  component: ColorListComponent,
  props: {
    expanded: true,
    selection: (color) => action(`Selected color: ${color}`),
    colors: {
      name: 'Normal Mode (square arrangement)',
      perRow: 6,
      compact: false,
      colors: generateColours(36)
    }
  },
});

NormalModeSquare.story = {
  name: 'Normal Mode (square arrangement)',
};

export const NormalModeRect = () => ({
  component: ColorListComponent,
  props: {
    expanded: true,
    selection: (color) => action(`Selected color: ${color}`),
    colors: {
      name: 'Normal Mode (rectangular arrangement)',
      perRow: 12,
      compact: false,
      colors: generateColours(36)
    }
  },
});

NormalModeRect.story = {
  name: 'Normal Mode (rectangular arrangement)',
};

export const CompactModeUnlimited = () => ({
  component: ColorListComponent,
  props: {
    expanded: true,
    selection: (color) => action(`Selected color: ${color}`),
    colors: {
      name: 'Compact Mode (no row limit)',
      compact: true,
      colors: generateColours(32)
    }
  },
});

CompactModeUnlimited.story = {
  name: 'Compact Mode (no row limit)',
};

export const CompactModeSquare = () => ({
  component: ColorListComponent,
  props: {
    expanded: true,
    selection: (color) => action(`Selected color: ${color}`),
    colors: {
      name: 'Compact Mode (square arrangement)',
      perRow: 6,
      compact: true,
      colors: generateColours(36)
    }
  },
});

CompactModeSquare.story = {
  name: 'Compact Mode (square arrangement)',
};

export const CompactModeRect = () => ({
  component: ColorListComponent,
  props: {
    expanded: true,
    selection: (color) => action(`Selected color: ${color}`),
    colors: {
      name: 'Compact Mode (rectangular arrangement)',
      perRow: 12,
      compact: true,
      colors: generateColours(36)
    }
  },
});

CompactModeRect.story = {
  name: 'Compact Mode (rectangular arrangement)',
};
