"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemRenameAvatarRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class ItemRenameAvatarRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("ItemRenameAvatarRsp", [
            { no: 14, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 5, name: "cd_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "rename_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { retcode: 0, cdTime: 0, renameId: 0 };
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
                case /* uint32 cd_time */ 5:
                    message.cdTime = reader.uint32();
                    break;
                case /* uint32 rename_id */ 8:
                    message.renameId = reader.uint32();
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
        /* uint32 cd_time = 5; */
        if (message.cdTime !== 0)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.cdTime);
        /* uint32 rename_id = 8; */
        if (message.renameId !== 0)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.renameId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ItemRenameAvatarRsp
 */
exports.ItemRenameAvatarRsp = new ItemRenameAvatarRsp$Type();
