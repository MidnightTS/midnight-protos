"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlessingAcceptGivePicRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class BlessingAcceptGivePicRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("BlessingAcceptGivePicRsp", [
            { no: 15, name: "index", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "pic_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = { index: 0, picId: 0, uid: 0, retcode: 0 };
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
                case /* uint32 index */ 15:
                    message.index = reader.uint32();
                    break;
                case /* uint32 pic_id */ 12:
                    message.picId = reader.uint32();
                    break;
                case /* uint32 uid */ 4:
                    message.uid = reader.uint32();
                    break;
                case /* int32 retcode */ 8:
                    message.retcode = reader.int32();
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
        /* uint32 index = 15; */
        if (message.index !== 0)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.index);
        /* uint32 pic_id = 12; */
        if (message.picId !== 0)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.picId);
        /* uint32 uid = 4; */
        if (message.uid !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.uid);
        /* int32 retcode = 8; */
        if (message.retcode !== 0)
            writer.tag(8, runtime_1.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message BlessingAcceptGivePicRsp
 */
exports.BlessingAcceptGivePicRsp = new BlessingAcceptGivePicRsp$Type();
