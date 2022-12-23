"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeBasicInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const HomeLimitedShopInfo_1 = require("./HomeLimitedShopInfo");
// @generated message type with reflection information, may provide speed optimized methods
class HomeBasicInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("HomeBasicInfo", [
            { no: 3, name: "exp", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 11, name: "home_owner_uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "cur_room_scene_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "owner_nick_name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "cur_module_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "limited_shop_info", kind: "message", T: () => HomeLimitedShopInfo_1.HomeLimitedShopInfo },
            { no: 7, name: "is_in_edit_mode", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 9, name: "level", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { exp: 0n, homeOwnerUid: 0, curRoomSceneId: 0, ownerNickName: "", curModuleId: 0, isInEditMode: false, level: 0 };
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
                case /* uint64 exp */ 3:
                    message.exp = reader.uint64().toBigInt();
                    break;
                case /* uint32 home_owner_uid */ 11:
                    message.homeOwnerUid = reader.uint32();
                    break;
                case /* uint32 cur_room_scene_id */ 14:
                    message.curRoomSceneId = reader.uint32();
                    break;
                case /* string owner_nick_name */ 6:
                    message.ownerNickName = reader.string();
                    break;
                case /* uint32 cur_module_id */ 4:
                    message.curModuleId = reader.uint32();
                    break;
                case /* HomeLimitedShopInfo limited_shop_info */ 13:
                    message.limitedShopInfo = HomeLimitedShopInfo_1.HomeLimitedShopInfo.internalBinaryRead(reader, reader.uint32(), options, message.limitedShopInfo);
                    break;
                case /* bool is_in_edit_mode */ 7:
                    message.isInEditMode = reader.bool();
                    break;
                case /* uint32 level */ 9:
                    message.level = reader.uint32();
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
        /* uint64 exp = 3; */
        if (message.exp !== 0n)
            writer.tag(3, runtime_1.WireType.Varint).uint64(message.exp);
        /* uint32 home_owner_uid = 11; */
        if (message.homeOwnerUid !== 0)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.homeOwnerUid);
        /* uint32 cur_room_scene_id = 14; */
        if (message.curRoomSceneId !== 0)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.curRoomSceneId);
        /* string owner_nick_name = 6; */
        if (message.ownerNickName !== "")
            writer.tag(6, runtime_1.WireType.LengthDelimited).string(message.ownerNickName);
        /* uint32 cur_module_id = 4; */
        if (message.curModuleId !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.curModuleId);
        /* HomeLimitedShopInfo limited_shop_info = 13; */
        if (message.limitedShopInfo)
            HomeLimitedShopInfo_1.HomeLimitedShopInfo.internalBinaryWrite(message.limitedShopInfo, writer.tag(13, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* bool is_in_edit_mode = 7; */
        if (message.isInEditMode !== false)
            writer.tag(7, runtime_1.WireType.Varint).bool(message.isInEditMode);
        /* uint32 level = 9; */
        if (message.level !== 0)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.level);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message HomeBasicInfo
 */
exports.HomeBasicInfo = new HomeBasicInfo$Type();
