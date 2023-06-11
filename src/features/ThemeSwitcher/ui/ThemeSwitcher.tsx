import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppButton, ButtonSize, ButtonVariant } from '@/shared/ui/AppButton';
import { useTheme } from '@/shared/lib/hooks/useTheme';
import ThemeChangeIcon from '@/shared/assets/icons/theme-change.svg';
import { AppIcon } from '@/shared/ui/AppIcon';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = memo((props: ThemeSwitcherProps) => {
    const { className } = props;
    // const dispatch = useAppDispatch();

    const { theme, toggleTheme } = useTheme();

    const onToggleHandler = useCallback(() => {
        // toggleTheme((newTheme) => {
        //     dispatch(saveJsonSettings({ theme: newTheme }));
        // });
        toggleTheme((newTheme) => {
            localStorage.setItem('theme', newTheme);
        });
    }, [toggleTheme]);

    return (
        <AppButton
            type="button"
            onClick={onToggleHandler}
            variant={ButtonVariant.CLEAR}
            size={ButtonSize.AUTO}
            className={classNames('', {}, [className])}
        >
            <AppIcon Svg={ThemeChangeIcon} />
        </AppButton>
    );
});
