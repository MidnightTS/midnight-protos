"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnchorPointOpReq = exports.AnchorPointOpReq_AnchorPointOpType = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
/**
 * @generated from protobuf enum AnchorPointOpReq.AnchorPointOpType
 */
var AnchorPointOpReq_AnchorPointOpType;
(function (AnchorPointOpReq_AnchorPointOpType) {
    /**
     * @generated from protobuf enum value: ANCHOR_POINT_OP_TYPE_NONE = 0;
     */
    AnchorPointOpReq_AnchorPointOpType[AnchorPointOpReq_AnchorPointOpType["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: ANCHOR_POINT_OP_TYPE_TELEPORT = 1;
     */
    AnchorPointOpReq_AnchorPointOpType[AnchorPointOpReq_AnchorPointOpType["TELEPORT"] = 1] = "TELEPORT";
    /**
     * @generated from protobuf enum value: ANCHOR_POINT_OP_TYPE_REMOVE = 2;
     */
    AnchorPointOpReq_AnchorPointOpType[AnchorPointOpReq_AnchorPointOpType["REMOVE"] = 2] = "REMOVE";
})(AnchorPointOpReq_AnchorPointOpType = exports.AnchorPointOpReq_AnchorPointOpType || (exports.AnchorPointOpReq_AnchorPointOpType = {}));
// @generated message type with reflection information, may provide speed optimized methods
class AnchorPointOpReq$Type extends runtime_5.MessageType {
    constructor() {
        super("AnchorPointOpReq", [
            { no: 4, name: "anchor_point_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "anchor_point_op_type", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { anchorPointId: 0, anchorPointOpType: 0 };
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
                case /* uint32 anchor_point_id */ 4:
                    message.anchorPointId = reader.uint32();
                    break;
                case /* uint32 anchor_point_op_type */ 10:
                    message.anchorPointOpType = reader.uint32();
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
        /* uint32 anchor_point_id = 4; */
        if (message.anchorPointId !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.anchorPointId);
        /* uint32 anchor_point_op_type = 10; */
        if (message.anchorPointOpType !== 0)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.anchorPointOpType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message AnchorPointOpReq
 */
exports.AnchorPointOpReq = new AnchorPointOpReq$Type();
