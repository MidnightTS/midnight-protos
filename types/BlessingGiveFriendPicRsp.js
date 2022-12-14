"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlessingGiveFriendPicRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class BlessingGiveFriendPicRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("BlessingGiveFriendPicRsp", [
            { no: 14, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 6, name: "pic_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { retcode: 0, picId: 0, uid: 0 };
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
                case /* int32 retcode */ 14:
                    message.retcode = reader.int32();
                    break;
                case /* uint32 pic_id */ 6:
                    message.picId = reader.uint32();
                    break;
                case /* uint32 uid */ 9:
                    message.uid = reader.uint32();
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
        /* int32 retcode = 14; */
        if (message.retcode !== 0)
            writer.tag(14, runtime_1.WireType.Varint).int32(message.retcode);
        /* uint32 pic_id = 6; */
        if (message.picId !== 0)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.picId);
        /* uint32 uid = 9; */
        if (message.uid !== 0)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.uid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message BlessingGiveFriendPicRsp
 */
exports.BlessingGiveFriendPicRsp = new BlessingGiveFriendPicRsp$Type();
