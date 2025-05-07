export default function ModalSuccessCreatePortfolio({display}) {
    return <div style={{display: display}}>
        <div className={`fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300 `}></div>
        <div className={`fixed inset-0 flex items-center justify-center transition-transform duration-300 ${display ? "translate-y-0" : "-translate-y-full pointer-events-none"}`}>
            <div className="bg-white rounded-lg shadow-lg p-6 w-96">
                <h2 className="text-xl font-bold mb-4">Portfolio Created Successfully!</h2>
                <p>Your portfolio has been created successfully. You can now view it.</p>
                <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded" onClick={() => window.location.reload()}>OK</button>
            </div>
        </div>
    </div>
}