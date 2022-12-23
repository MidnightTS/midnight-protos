"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GCGMsgCostRevise = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const GCGCostReviseInfo_1 = require("./GCGCostReviseInfo");
// @generated message type with reflection information, may provide speed optimized methods
class GCGMsgCostRevise$Type extends runtime_5.MessageType {
    constructor() {
        super("GCGMsgCostRevise", [
            { no: 3, name: "cost_revise", kind: "message", T: () => GCGCostReviseInfo_1.GCGCostReviseInfo },
            { no: 1, name: "controller_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { controllerId: 0 };
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
                case /* GCGCostReviseInfo cost_revise */ 3:
                    message.costRevise = GCGCostReviseInfo_1.GCGCostReviseInfo.internalBinaryRead(reader, reader.uint32(), options, message.costRevise);
                    break;
                case /* uint32 controller_id */ 1:
                    message.controllerId = reader.uint32();
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
        /* GCGCostReviseInfo cost_revise = 3; */
        if (message.costRevise)
            GCGCostReviseInfo_1.GCGCostReviseInfo.internalBinaryWrite(message.costRevise, writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 controller_id = 1; */
        if (message.controllerId !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.controllerId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GCGMsgCostRevise
 */
exports.GCGMsgCostRevise = new GCGMsgCostRevise$Type();
