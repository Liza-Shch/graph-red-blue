export const getGraph = (input: string): Record<string, Set<string>> | null => {
    const graph: Record<string, Set<string>> = {};
    const rawEdges = input.trim().split(/[,\n]/).map((str) => str.trim());
    for (const str of rawEdges) {
        if (str.match(/[^a-z\s-]/)) {
            return null;
        }

        const nodes = str.split('-');
        if (nodes.length < 2) {
            return null;
        }

        let headNode;
        for (const rawNode of nodes) {
            const node = rawNode.trim();
            if (node.length !== 1) {
                return null;
            }
            
            if (!headNode) {
                headNode = node;
            } else {
                graph[headNode] ??= new Set<string>();
                graph[headNode].add(node);
                headNode = node;
            }
        }
    };

    return graph;
};

export const checkGraphIsTwoColor = () => {

};
