"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Unk3300_PPKPCOCOMDH = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const GCGDuel_1 = require("./GCGDuel");
// @generated message type with reflection information, may provide speed optimized methods
class Unk3300_PPKPCOCOMDH$Type extends runtime_5.MessageType {
    constructor() {
        super("Unk3300_PPKPCOCOMDH", [
            { no: 12, name: "controller_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "op_seq", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "gm_msg", kind: "scalar", oneof: "detail", T: 9 /*ScalarType.STRING*/ },
            { no: 14, name: "duel", kind: "message", oneof: "detail", T: () => GCGDuel_1.GCGDuel }
        ]);
    }
    create(value) {
        const message = { controllerId: 0, opSeq: 0, detail: { oneofKind: undefined } };
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
                case /* uint32 controller_id */ 12:
                    message.controllerId = reader.uint32();
                    break;
                case /* uint32 op_seq */ 13:
                    message.opSeq = reader.uint32();
                    break;
                case /* string gm_msg */ 2:
                    message.detail = {
                        oneofKind: "gmMsg",
                        gmMsg: reader.string()
                    };
                    break;
                case /* GCGDuel duel */ 14:
                    message.detail = {
                        oneofKind: "duel",
                        duel: GCGDuel_1.GCGDuel.internalBinaryRead(reader, reader.uint32(), options, message.detail.duel)
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
        /* uint32 controller_id = 12; */
        if (message.controllerId !== 0)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.controllerId);
        /* uint32 op_seq = 13; */
        if (message.opSeq !== 0)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.opSeq);
        /* string gm_msg = 2; */
        if (message.detail.oneofKind === "gmMsg")
            writer.tag(2, runtime_1.WireType.LengthDelimited).string(message.detail.gmMsg);
        /* GCGDuel duel = 14; */
        if (message.detail.oneofKind === "duel")
            GCGDuel_1.GCGDuel.internalBinaryWrite(message.detail.duel, writer.tag(14, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message Unk3300_PPKPCOCOMDH
 */
exports.Unk3300_PPKPCOCOMDH = new Unk3300_PPKPCOCOMDH$Type();
