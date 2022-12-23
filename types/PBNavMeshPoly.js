"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PBNavMeshPoly = exports.PBNavMeshPoly_EdgeType = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
/**
 * @generated from protobuf enum PBNavMeshPoly.EdgeType
 */
var PBNavMeshPoly_EdgeType;
(function (PBNavMeshPoly_EdgeType) {
    /**
     * @generated from protobuf enum value: EDGE_TYPE_INNER = 0;
     */
    PBNavMeshPoly_EdgeType[PBNavMeshPoly_EdgeType["INNER"] = 0] = "INNER";
    /**
     * @generated from protobuf enum value: EDGE_TYPE_TILE_BOUND = 1;
     */
    PBNavMeshPoly_EdgeType[PBNavMeshPoly_EdgeType["TILE_BOUND"] = 1] = "TILE_BOUND";
    /**
     * @generated from protobuf enum value: EDGE_TYPE_TILE_BOUND_UNCONNECT = 2;
     */
    PBNavMeshPoly_EdgeType[PBNavMeshPoly_EdgeType["TILE_BOUND_UNCONNECT"] = 2] = "TILE_BOUND_UNCONNECT";
    /**
     * @generated from protobuf enum value: EDGE_TYPE_TILE_BOUND_OVERIDE = 3;
     */
    PBNavMeshPoly_EdgeType[PBNavMeshPoly_EdgeType["TILE_BOUND_OVERIDE"] = 3] = "TILE_BOUND_OVERIDE";
})(PBNavMeshPoly_EdgeType = exports.PBNavMeshPoly_EdgeType || (exports.PBNavMeshPoly_EdgeType = {}));
// @generated message type with reflection information, may provide speed optimized methods
class PBNavMeshPoly$Type extends runtime_5.MessageType {
    constructor() {
        super("PBNavMeshPoly", [
            { no: 14, name: "area", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 13, name: "vects", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 5 /*ScalarType.INT32*/ },
            { no: 5, name: "edge_types", kind: "enum", repeat: 1 /*RepeatType.PACKED*/, T: () => ["PBNavMeshPoly.EdgeType", PBNavMeshPoly_EdgeType, "EDGE_TYPE_"] }
        ]);
    }
    create(value) {
        const message = { area: 0, vects: [], edgeTypes: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* int32 area */ 14:
                    message.area = reader.int32();
                    break;
                case /* repeated int32 vects */ 13:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.vects.push(reader.int32());
                    else
                        message.vects.push(reader.int32());
                    break;
                case /* repeated PBNavMeshPoly.EdgeType edge_types */ 5:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.edgeTypes.push(reader.int32());
                    else
                        message.edgeTypes.push(reader.int32());
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* int32 area = 14; */
        if (message.area !== 0)
            writer.tag(14, runtime_2.WireType.Varint).int32(message.area);
        /* repeated int32 vects = 13; */
        if (message.vects.length) {
            writer.tag(13, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.vects.length; i++)
                writer.int32(message.vects[i]);
            writer.join();
        }
        /* repeated PBNavMeshPoly.EdgeType edge_types = 5; */
        if (message.edgeTypes.length) {
            writer.tag(5, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.edgeTypes.length; i++)
                writer.int32(message.edgeTypes[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message PBNavMeshPoly
 */
exports.PBNavMeshPoly = new PBNavMeshPoly$Type();
