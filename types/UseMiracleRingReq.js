"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UseMiracleRingReq = exports.UseMiracleRingReq_MiracleRingOpType = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const Vector_1 = require("./Vector");
/**
 * @generated from protobuf enum UseMiracleRingReq.MiracleRingOpType
 */
var UseMiracleRingReq_MiracleRingOpType;
(function (UseMiracleRingReq_MiracleRingOpType) {
    /**
     * @generated from protobuf enum value: MIRACLE_RING_OP_TYPE_NONE = 0;
     */
    UseMiracleRingReq_MiracleRingOpType[UseMiracleRingReq_MiracleRingOpType["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: MIRACLE_RING_OP_TYPE_PLACE = 1;
     */
    UseMiracleRingReq_MiracleRingOpType[UseMiracleRingReq_MiracleRingOpType["PLACE"] = 1] = "PLACE";
    /**
     * @generated from protobuf enum value: MIRACLE_RING_OP_TYPE_RETRACT = 2;
     */
    UseMiracleRingReq_MiracleRingOpType[UseMiracleRingReq_MiracleRingOpType["RETRACT"] = 2] = "RETRACT";
})(UseMiracleRingReq_MiracleRingOpType = exports.UseMiracleRingReq_MiracleRingOpType || (exports.UseMiracleRingReq_MiracleRingOpType = {}));
// @generated message type with reflection information, may provide speed optimized methods
class UseMiracleRingReq$Type extends runtime_5.MessageType {
    constructor() {
        super("UseMiracleRingReq", [
            { no: 14, name: "rot", kind: "message", T: () => Vector_1.Vector },
            { no: 13, name: "pos", kind: "message", T: () => Vector_1.Vector },
            { no: 5, name: "miracle_ring_op_type", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { miracleRingOpType: 0 };
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
                case /* Vector rot */ 14:
                    message.rot = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.rot);
                    break;
                case /* Vector pos */ 13:
                    message.pos = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.pos);
                    break;
                case /* uint32 miracle_ring_op_type */ 5:
                    message.miracleRingOpType = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* Vector rot = 14; */
        if (message.rot)
            Vector_1.Vector.internalBinaryWrite(message.rot, writer.tag(14, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* Vector pos = 13; */
        if (message.pos)
            Vector_1.Vector.internalBinaryWrite(message.pos, writer.tag(13, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 miracle_ring_op_type = 5; */
        if (message.miracleRingOpType !== 0)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.miracleRingOpType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message UseMiracleRingReq
 */
exports.UseMiracleRingReq = new UseMiracleRingReq$Type();
