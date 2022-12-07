"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePlayerShowAvatarListRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class UpdatePlayerShowAvatarListRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("UpdatePlayerShowAvatarListRsp", [
            { no: 8, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 11, name: "show_avatar_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "is_show_avatar", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { retcode: 0, showAvatarIdList: [], isShowAvatar: false };
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
                case /* int32 retcode */ 8:
                    message.retcode = reader.int32();
                    break;
                case /* repeated uint32 show_avatar_id_list */ 11:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.showAvatarIdList.push(reader.uint32());
                    else
                        message.showAvatarIdList.push(reader.uint32());
                    break;
                case /* bool is_show_avatar */ 2:
                    message.isShowAvatar = reader.bool();
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
        /* int32 retcode = 8; */
        if (message.retcode !== 0)
            writer.tag(8, runtime_2.WireType.Varint).int32(message.retcode);
        /* repeated uint32 show_avatar_id_list = 11; */
        if (message.showAvatarIdList.length) {
            writer.tag(11, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.showAvatarIdList.length; i++)
                writer.uint32(message.showAvatarIdList[i]);
            writer.join();
        }
        /* bool is_show_avatar = 2; */
        if (message.isShowAvatar !== false)
            writer.tag(2, runtime_2.WireType.Varint).bool(message.isShowAvatar);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message UpdatePlayerShowAvatarListRsp
 */
exports.UpdatePlayerShowAvatarListRsp = new UpdatePlayerShowAvatarListRsp$Type();
