import type {IAuthFeature} from "../types/types.tsx";

const FeatureCard = ({ feature }) => {
    return (
        <div className={"flex flex-col items-center gap-3"}>
            {feature.icon && <feature.icon className={"text-orange-600 text-5xl font-bold"} />} {/* Asegura que feature.icon exista */}
            <h3 className={"text-xl font-bold"}>{ feature.header }</h3>
            <h5 className={"w-100 text-center text-gray-600"}>{ feature.description }</h5>
        </div>
    )
}

export default FeatureCard