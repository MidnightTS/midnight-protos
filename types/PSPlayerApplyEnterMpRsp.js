"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PSPlayerApplyEnterMpRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class PSPlayerApplyEnterMpRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("PSPlayerApplyEnterMpRsp", [
            { no: 3, name: "target_psn_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 10, name: "param", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { targetPsnId: "", retcode: 0, param: 0 };
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
                case /* string target_psn_id */ 3:
                    message.targetPsnId = reader.string();
                    break;
                case /* int32 retcode */ 5:
                    message.retcode = reader.int32();
                    break;
                case /* uint32 param */ 10:
                    message.param = reader.uint32();
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
        /* string target_psn_id = 3; */
        if (message.targetPsnId !== "")
            writer.tag(3, runtime_1.WireType.LengthDelimited).string(message.targetPsnId);
        /* int32 retcode = 5; */
        if (message.retcode !== 0)
            writer.tag(5, runtime_1.WireType.Varint).int32(message.retcode);
        /* uint32 param = 10; */
        if (message.param !== 0)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.param);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message PSPlayerApplyEnterMpRsp
 */
exports.PSPlayerApplyEnterMpRsp = new PSPlayerApplyEnterMpRsp$Type();