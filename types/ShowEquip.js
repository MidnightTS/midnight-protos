"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShowEquip = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const Weapon_1 = require("./Weapon");
const Reliquary_1 = require("./Reliquary");
// @generated message type with reflection information, may provide speed optimized methods
class ShowEquip$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ShowEquip", [
            { no: 1, name: "item_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "reliquary", kind: "message", oneof: "detail", T: () => Reliquary_1.Reliquary },
            { no: 3, name: "weapon", kind: "message", oneof: "detail", T: () => Weapon_1.Weapon }
        ]);
    }
    create(value) {
        const message = { detail: { oneofKind: undefined } };
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
                case /* optional uint32 item_id */ 1:
                    message.itemId = reader.uint32();
                    break;
                case /* com.midnights.game.Reliquary reliquary */ 2:
                    message.detail = {
                        oneofKind: "reliquary",
                        reliquary: Reliquary_1.Reliquary.internalBinaryRead(reader, reader.uint32(), options, message.detail.reliquary)
                    };
                    break;
                case /* com.midnights.game.Weapon weapon */ 3:
                    message.detail = {
                        oneofKind: "weapon",
                        weapon: Weapon_1.Weapon.internalBinaryRead(reader, reader.uint32(), options, message.detail.weapon)
                    };
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
        /* optional uint32 item_id = 1; */
        if (message.itemId !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.itemId);
        /* com.midnights.game.Reliquary reliquary = 2; */
        if (message.detail.oneofKind === "reliquary")
            Reliquary_1.Reliquary.internalBinaryWrite(message.detail.reliquary, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* com.midnights.game.Weapon weapon = 3; */
        if (message.detail.oneofKind === "weapon")
            Weapon_1.Weapon.internalBinaryWrite(message.detail.weapon, writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ShowEquip
 */
exports.ShowEquip = new ShowEquip$Type();
