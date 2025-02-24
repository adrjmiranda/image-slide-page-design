/**
 * Slide Animation
 */

const PREV_CLASS: string = 'prev';
const NEXT_CLASS: string = 'next';

const ACTIVE_CLASS: string = 'active';

const prevButton = document.getElementById(PREV_CLASS) as HTMLButtonElement;
const nextButton = document.getElementById(NEXT_CLASS) as HTMLButtonElement;

const slidesBox = document.getElementById('slides');

const getRootVariable = (variableName: string): string => {
	const root = document.documentElement;
	const variable = getComputedStyle(root).getPropertyValue(variableName);

	return variable;
};

const clearSlidesBoxClasses = (): void => {
	slidesBox?.classList.remove(PREV_CLASS, NEXT_CLASS);
};

const clearSlideItemsClasses = (): void => {
	const slideItems = document.querySelectorAll(
		'.slide'
	) as NodeListOf<HTMLDivElement>;

	slideItems.forEach((item) => item.classList.remove(ACTIVE_CLASS));
	slideItems[1].classList.add(ACTIVE_CLASS);
};

const clearClasses = (): void => {
	clearSlideItemsClasses();
	clearSlidesBoxClasses();
};

const updateSlideItems = (type: string): void => {
	const slideItems = document.querySelectorAll(
		'.slide'
	) as NodeListOf<HTMLDivElement>;

	const index = type === PREV_CLASS ? 0 : slideItems?.length ?? 0;

	switch (type) {
		case PREV_CLASS:
			const firstElement = slideItems[index];
			slidesBox?.appendChild(firstElement);
			break;

		case NEXT_CLASS:
			const lastElement = slideItems[index - 1];
			slidesBox?.prepend(lastElement);
			break;
	}
};

if (prevButton && nextButton) {
	[prevButton, nextButton].forEach((button) => {
		const id: string = button.getAttribute('id') ?? '';

		button.addEventListener('click', () => {
			slidesBox?.classList.add(id);

			const slideDuration =
				parseFloat(getRootVariable('--slide-duration')) * 1000;

			setTimeout(() => {
				updateSlideItems(id);
				clearClasses();
			}, slideDuration);
		});
	});
}
