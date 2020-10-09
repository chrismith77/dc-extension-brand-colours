import { MatTooltipModule } from '@angular/material/tooltip';
import { moduleMetadata } from '@storybook/angular';
import { MatIconModule } from '@angular/material/icon';
import { ColorPreviewComponent } from 'src/app/color-preview/color-preview.component';
import { BrandColor } from 'src/app/model/brand-colors';
import { action } from '@storybook/addon-actions';
import { IconsModule } from 'src/app/icons.module';

export default {
  title: 'Color Preview',
  component: ColorPreviewComponent,
  decorators: [
    moduleMetadata({
      declarations: [ColorPreviewComponent],
      imports: [],
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

export const NoColour = () => ({
  component: ColorPreviewComponent,
  props: {
    color: null
  },
});

NoColour.story = {
  name: 'No Color',
};

export const SolidColour = () => ({
  component: ColorPreviewComponent,
  props: {
    color: '#FF0000'
  },
});

SolidColour.story = {
  name: 'Solid Color',
};

export const SemitransparentColour = () => ({
  component: ColorPreviewComponent,
  props: {
    color: 'rgba(255, 0, 0, 0.5)'
  },
});

SemitransparentColour.story = {
  name: 'Semi-Transparent Color',
};

export const RandomColour = () => ({
  component: ColorPreviewComponent,
  props: {
    color: generateColours(1)[0].color
  },
});

RandomColour.story = {
  name: 'Random Color',
};

