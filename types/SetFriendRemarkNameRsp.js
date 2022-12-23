"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetFriendRemarkNameRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class SetFriendRemarkNameRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("SetFriendRemarkNameRsp", [
            { no: 13, name: "remark_name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 12, name: "is_clear_remark", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 1, name: "uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = { remarkName: "", isClearRemark: false, uid: 0, retcode: 0 };
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
                case /* string remark_name */ 13:
                    message.remarkName = reader.string();
                    break;
                case /* bool is_clear_remark */ 12:
                    message.isClearRemark = reader.bool();
                    break;
                case /* uint32 uid */ 1:
                    message.uid = reader.uint32();
                    break;
                case /* int32 retcode */ 7:
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
        /* string remark_name = 13; */
        if (message.remarkName !== "")
            writer.tag(13, runtime_1.WireType.LengthDelimited).string(message.remarkName);
        /* bool is_clear_remark = 12; */
        if (message.isClearRemark !== false)
            writer.tag(12, runtime_1.WireType.Varint).bool(message.isClearRemark);
        /* uint32 uid = 1; */
        if (message.uid !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.uid);
        /* int32 retcode = 7; */
        if (message.retcode !== 0)
            writer.tag(7, runtime_1.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SetFriendRemarkNameRsp
 */
exports.SetFriendRemarkNameRsp = new SetFriendRemarkNameRsp$Type();
