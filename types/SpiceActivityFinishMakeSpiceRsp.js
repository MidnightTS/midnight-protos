"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpiceActivityFinishMakeSpiceRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class SpiceActivityFinishMakeSpiceRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("SpiceActivityFinishMakeSpiceRsp", [
            { no: 8, name: "stage_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 9, name: "is_success", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { stageId: 0, retcode: 0, isSuccess: false };
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
                case /* uint32 stage_id */ 8:
                    message.stageId = reader.uint32();
                    break;
                case /* int32 retcode */ 10:
                    message.retcode = reader.int32();
                    break;
                case /* bool is_success */ 9:
                    message.isSuccess = reader.bool();
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
        /* uint32 stage_id = 8; */
        if (message.stageId !== 0)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.stageId);
        /* int32 retcode = 10; */
        if (message.retcode !== 0)
            writer.tag(10, runtime_1.WireType.Varint).int32(message.retcode);
        /* bool is_success = 9; */
        if (message.isSuccess !== false)
            writer.tag(9, runtime_1.WireType.Varint).bool(message.isSuccess);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SpiceActivityFinishMakeSpiceRsp
 */
exports.SpiceActivityFinishMakeSpiceRsp = new SpiceActivityFinishMakeSpiceRsp$Type();
