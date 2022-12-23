"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvatarEquipAffixStartNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const AvatarEquipAffixInfo_1 = require("./AvatarEquipAffixInfo");
// @generated message type with reflection information, may provide speed optimized methods
class AvatarEquipAffixStartNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("AvatarEquipAffixStartNotify", [
            { no: 1, name: "avatar_guid", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 9, name: "equip_affix_info", kind: "message", T: () => AvatarEquipAffixInfo_1.AvatarEquipAffixInfo }
        ]);
    }
    create(value) {
        const message = { avatarGuid: 0n };
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
                case /* uint64 avatar_guid */ 1:
                    message.avatarGuid = reader.uint64().toBigInt();
                    break;
                case /* AvatarEquipAffixInfo equip_affix_info */ 9:
                    message.equipAffixInfo = AvatarEquipAffixInfo_1.AvatarEquipAffixInfo.internalBinaryRead(reader, reader.uint32(), options, message.equipAffixInfo);
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
        /* uint64 avatar_guid = 1; */
        if (message.avatarGuid !== 0n)
            writer.tag(1, runtime_1.WireType.Varint).uint64(message.avatarGuid);
        /* AvatarEquipAffixInfo equip_affix_info = 9; */
        if (message.equipAffixInfo)
            AvatarEquipAffixInfo_1.AvatarEquipAffixInfo.internalBinaryWrite(message.equipAffixInfo, writer.tag(9, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message AvatarEquipAffixStartNotify
 */
exports.AvatarEquipAffixStartNotify = new AvatarEquipAffixStartNotify$Type();
