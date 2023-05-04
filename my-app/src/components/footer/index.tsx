import { ContainerF } from './style';
import motorsShop from '../../assets/motorsShop.svg';

export const Footer = () => {
	return (
		<ContainerF>
			<div>
				<figure>
					<img src={motorsShop} alt="Logo da empresa" />
				</figure>
				<p>&copy; 2022 - Todos os direitos reservados.</p>
				<a href="/">^</a>
			</div>
		</ContainerF>
	);
};
