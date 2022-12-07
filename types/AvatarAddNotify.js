"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvatarAddNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const AvatarInfo_1 = require("./AvatarInfo");
// @generated message type with reflection information, may provide speed optimized methods
class AvatarAddNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("AvatarAddNotify", [
            { no: 1, name: "avatar", kind: "message", T: () => AvatarInfo_1.AvatarInfo },
            { no: 15, name: "is_in_team", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { isInTeam: false };
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
                case /* AvatarInfo avatar */ 1:
                    message.avatar = AvatarInfo_1.AvatarInfo.internalBinaryRead(reader, reader.uint32(), options, message.avatar);
                    break;
                case /* bool is_in_team */ 15:
                    message.isInTeam = reader.bool();
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
        /* AvatarInfo avatar = 1; */
        if (message.avatar)
            AvatarInfo_1.AvatarInfo.internalBinaryWrite(message.avatar, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* bool is_in_team = 15; */
        if (message.isInTeam !== false)
            writer.tag(15, runtime_1.WireType.Varint).bool(message.isInTeam);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message AvatarAddNotify
 */
exports.AvatarAddNotify = new AvatarAddNotify$Type();
