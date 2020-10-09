import { MatTooltipModule } from '@angular/material/tooltip';
import { moduleMetadata } from '@storybook/angular';
import { MatIconModule } from '@angular/material/icon';
import { ColorPreviewComponent } from 'src/app/color-preview/color-preview.component';
import { BrandColor } from 'src/app/model/brand-colors';
import { action } from '@storybook/addon-actions';
import { ChosenColorSummaryComponent } from 'src/app/chosen-color-summary/chosen-color-summary.component';
import { MatButtonModule } from '@angular/material/button';
import { IconsModule } from 'src/app/icons.module';

export default {
  title: 'Chosen Color Summary',
  component: ChosenColorSummaryComponent,
  decorators: [
    moduleMetadata({
      declarations: [ChosenColorSummaryComponent, ColorPreviewComponent],
      imports: [MatTooltipModule, MatIconModule, MatButtonModule, IconsModule],
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

export const NoColourSelected = () => ({
  component: ChosenColorSummaryComponent,
  props: {
    color: null
  },
});

NoColourSelected.story = {
  name: 'No Color Selected',
};

export const RandomColourSelected = () => ({
  component: ChosenColorSummaryComponent,
  props: {
    color: generateColours(1)[0]
  },
});

RandomColourSelected.story = {
  name: 'Random Color Selected',
};

