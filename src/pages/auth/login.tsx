import { type FormEvent, type JSX, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';

import { Eye, EyeOff } from 'lucide-react';

import { icons, images } from '@/assets';
import { LanguageSelect, ThemeSwitcher } from '@/components';

export const LoginPage = (): JSX.Element => {
	const [isPasswordVisible, setIsPasswordVisible] = useState(false);
	const { t } = useTranslation('loginPage');

	const handleTogglePasswordvisible = (): void => {
		setIsPasswordVisible((isPasswordVisible): boolean => !isPasswordVisible);
	};

	const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
		e.preventDefault();
	};

	return (
		<div className="w-full h-screen font-borel bg-bg">
			<div className="w-full p-4 h-screen md:flex md:gap-4">
				<div className="w-full h-1/3 md:w-1/2 md:h-full">
					<img
						src={images.loginPage.loginBackground}
						className="w-full h-full object-cover rounded-xl"
						alt={t('Login background')}
					/>
				</div>
				<div className="w-full md:w-1/2 md:flex md:justify-center md:items-center">
					<div className="w-full md:h-fit flex flex-col items-center gap-5.5">
						<div className="w-full">
							<form
								onSubmit={handleSubmit}
								className="w-full flex flex-col gap-4"
							>
								<div className="flex justify-between pt-3">
									<h1 className="text-2xl font-semibold pt-4">
										{t('Login')}
									</h1>
									<div className="flex gap-2">
										<LanguageSelect />
										<ThemeSwitcher />
									</div>
								</div>
								<div>
									<input
										type="text"
										name="username"
										autoComplete="username"
										placeholder={t('Email or Username')}
										className="w-full px-2 py-2.75 rounded-xl bg-input border border-input-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring"
									/>
								</div>
								<div className="relative flex items-center">
									<input
										type={isPasswordVisible ? 'text' : 'password'}
										name="password"
										autoComplete="current-password"
										placeholder={t('Password')}
										className="w-full px-2 py-2.75 rounded-xl bg-input border border-input-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring"
									/>
									<button
										type="button"
										className="absolute right-4 w-4 h-4"
										onClick={handleTogglePasswordvisible}
										aria-label={
											isPasswordVisible
												? t('Hide password')
												: t('Show password')
										}
										aria-pressed={isPasswordVisible}
									>
										{isPasswordVisible ? (
											<EyeOff className="w-full h-full" />
										) : (
											<Eye className="w-full h-full" />
										)}
									</button>
								</div>
								<button className="w-full py-3 bg-primary hover:bg-primary-hover text-on-primary rounded-xl font-semibold transition-colors">
									{t('Login')}
								</button>
							</form>
						</div>
						<div className="w-full pt-0.5 flex items-center gap-6">
							<div className="flex-1 border-t border-border" />
							<span>{t('or')}</span>
							<div className="flex-1 border-t border-border" />
						</div>
						<div className="w-full flex justify-center gap-3.5">
							<button className="w-full py-3 bg-bg border border-border hover:bg-surface rounded-xl font-semibold transition-colors">
								<div className="w-full flex justify-center gap-2">
									<img src={icons.googleIcon} alt="Google" />
									<span>{t('Google')}</span>
								</div>
							</button>
							<button className="w-full py-3 bg-bg border border-border hover:bg-surface rounded-xl font-semibold transition-colors">
								<div className="w-full flex justify-center gap-2">
									<img src={icons.facebookIcon} alt="Facebook" />
									<span>{t('Facebook')}</span>
								</div>
							</button>
						</div>
						<div className="p-0.5 font-semibold">
							<span>{t("Don't have an account?")} </span>
							<Link
								to="../sign-up"
								relative="path"
								className="text-primary hover:text-primary-hover transition-colors"
							>
								{t('Sign up here')}
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
