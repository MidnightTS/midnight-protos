"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvtAvatarEnterFocusNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const Vector_1 = require("./Vector");
const ForwardType_1 = require("./ForwardType");
// @generated message type with reflection information, may provide speed optimized methods
class EvtAvatarEnterFocusNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("EvtAvatarEnterFocusNotify", [
            { no: 14, name: "forward_type", kind: "enum", T: () => ["ForwardType", ForwardType_1.ForwardType, "FORWARD_TYPE_"] },
            { no: 15, name: "Unk3300_NPBLDGPCDOC", kind: "scalar", jsonName: "Unk3300NPBLDGPCDOC", T: 8 /*ScalarType.BOOL*/ },
            { no: 4, name: "Unk3300_IJHHDFDIJMA", kind: "scalar", jsonName: "Unk3300IJHHDFDIJMA", T: 8 /*ScalarType.BOOL*/ },
            { no: 13, name: "Unk3300_NALGJBLGNJI", kind: "scalar", jsonName: "Unk3300NALGJBLGNJI", T: 8 /*ScalarType.BOOL*/ },
            { no: 2, name: "Unk3300_OOOPPHEJKDI", kind: "scalar", jsonName: "Unk3300OOOPPHEJKDI", T: 8 /*ScalarType.BOOL*/ },
            { no: 9, name: "Unk3300_KMAFBMKJDAK", kind: "scalar", jsonName: "Unk3300KMAFBMKJDAK", T: 8 /*ScalarType.BOOL*/ },
            { no: 8, name: "Unk3300_LNLOOKDHJGF", kind: "scalar", jsonName: "Unk3300LNLOOKDHJGF", T: 8 /*ScalarType.BOOL*/ },
            { no: 1, name: "entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "Unk3300_GGHCEGJEHND", kind: "scalar", jsonName: "Unk3300GGHCEGJEHND", T: 8 /*ScalarType.BOOL*/ },
            { no: 7, name: "Unk3300_NLNIBJAFADG", kind: "scalar", jsonName: "Unk3300NLNIBJAFADG", T: 8 /*ScalarType.BOOL*/ },
            { no: 3, name: "focus_forward", kind: "message", T: () => Vector_1.Vector },
            { no: 12, name: "Unk3300_CDAJJHIPIKH", kind: "scalar", jsonName: "Unk3300CDAJJHIPIKH", T: 8 /*ScalarType.BOOL*/ },
            { no: 6, name: "Unk3300_FHHDDNENEDD", kind: "scalar", jsonName: "Unk3300FHHDDNENEDD", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { forwardType: 0, unk3300NPBLDGPCDOC: false, unk3300IJHHDFDIJMA: false, unk3300NALGJBLGNJI: false, unk3300OOOPPHEJKDI: false, unk3300KMAFBMKJDAK: false, unk3300LNLOOKDHJGF: false, entityId: 0, unk3300GGHCEGJEHND: false, unk3300NLNIBJAFADG: false, unk3300CDAJJHIPIKH: false, unk3300FHHDDNENEDD: false };
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
                case /* ForwardType forward_type */ 14:
                    message.forwardType = reader.int32();
                    break;
                case /* bool Unk3300_NPBLDGPCDOC = 15 [json_name = "Unk3300NPBLDGPCDOC"];*/ 15:
                    message.unk3300NPBLDGPCDOC = reader.bool();
                    break;
                case /* bool Unk3300_IJHHDFDIJMA = 4 [json_name = "Unk3300IJHHDFDIJMA"];*/ 4:
                    message.unk3300IJHHDFDIJMA = reader.bool();
                    break;
                case /* bool Unk3300_NALGJBLGNJI = 13 [json_name = "Unk3300NALGJBLGNJI"];*/ 13:
                    message.unk3300NALGJBLGNJI = reader.bool();
                    break;
                case /* bool Unk3300_OOOPPHEJKDI = 2 [json_name = "Unk3300OOOPPHEJKDI"];*/ 2:
                    message.unk3300OOOPPHEJKDI = reader.bool();
                    break;
                case /* bool Unk3300_KMAFBMKJDAK = 9 [json_name = "Unk3300KMAFBMKJDAK"];*/ 9:
                    message.unk3300KMAFBMKJDAK = reader.bool();
                    break;
                case /* bool Unk3300_LNLOOKDHJGF = 8 [json_name = "Unk3300LNLOOKDHJGF"];*/ 8:
                    message.unk3300LNLOOKDHJGF = reader.bool();
                    break;
                case /* uint32 entity_id */ 1:
                    message.entityId = reader.uint32();
                    break;
                case /* bool Unk3300_GGHCEGJEHND = 11 [json_name = "Unk3300GGHCEGJEHND"];*/ 11:
                    message.unk3300GGHCEGJEHND = reader.bool();
                    break;
                case /* bool Unk3300_NLNIBJAFADG = 7 [json_name = "Unk3300NLNIBJAFADG"];*/ 7:
                    message.unk3300NLNIBJAFADG = reader.bool();
                    break;
                case /* Vector focus_forward */ 3:
                    message.focusForward = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.focusForward);
                    break;
                case /* bool Unk3300_CDAJJHIPIKH = 12 [json_name = "Unk3300CDAJJHIPIKH"];*/ 12:
                    message.unk3300CDAJJHIPIKH = reader.bool();
                    break;
                case /* bool Unk3300_FHHDDNENEDD = 6 [json_name = "Unk3300FHHDDNENEDD"];*/ 6:
                    message.unk3300FHHDDNENEDD = reader.bool();
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
        /* ForwardType forward_type = 14; */
        if (message.forwardType !== 0)
            writer.tag(14, runtime_1.WireType.Varint).int32(message.forwardType);
        /* bool Unk3300_NPBLDGPCDOC = 15 [json_name = "Unk3300NPBLDGPCDOC"]; */
        if (message.unk3300NPBLDGPCDOC !== false)
            writer.tag(15, runtime_1.WireType.Varint).bool(message.unk3300NPBLDGPCDOC);
        /* bool Unk3300_IJHHDFDIJMA = 4 [json_name = "Unk3300IJHHDFDIJMA"]; */
        if (message.unk3300IJHHDFDIJMA !== false)
            writer.tag(4, runtime_1.WireType.Varint).bool(message.unk3300IJHHDFDIJMA);
        /* bool Unk3300_NALGJBLGNJI = 13 [json_name = "Unk3300NALGJBLGNJI"]; */
        if (message.unk3300NALGJBLGNJI !== false)
            writer.tag(13, runtime_1.WireType.Varint).bool(message.unk3300NALGJBLGNJI);
        /* bool Unk3300_OOOPPHEJKDI = 2 [json_name = "Unk3300OOOPPHEJKDI"]; */
        if (message.unk3300OOOPPHEJKDI !== false)
            writer.tag(2, runtime_1.WireType.Varint).bool(message.unk3300OOOPPHEJKDI);
        /* bool Unk3300_KMAFBMKJDAK = 9 [json_name = "Unk3300KMAFBMKJDAK"]; */
        if (message.unk3300KMAFBMKJDAK !== false)
            writer.tag(9, runtime_1.WireType.Varint).bool(message.unk3300KMAFBMKJDAK);
        /* bool Unk3300_LNLOOKDHJGF = 8 [json_name = "Unk3300LNLOOKDHJGF"]; */
        if (message.unk3300LNLOOKDHJGF !== false)
            writer.tag(8, runtime_1.WireType.Varint).bool(message.unk3300LNLOOKDHJGF);
        /* uint32 entity_id = 1; */
        if (message.entityId !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.entityId);
        /* bool Unk3300_GGHCEGJEHND = 11 [json_name = "Unk3300GGHCEGJEHND"]; */
        if (message.unk3300GGHCEGJEHND !== false)
            writer.tag(11, runtime_1.WireType.Varint).bool(message.unk3300GGHCEGJEHND);
        /* bool Unk3300_NLNIBJAFADG = 7 [json_name = "Unk3300NLNIBJAFADG"]; */
        if (message.unk3300NLNIBJAFADG !== false)
            writer.tag(7, runtime_1.WireType.Varint).bool(message.unk3300NLNIBJAFADG);
        /* Vector focus_forward = 3; */
        if (message.focusForward)
            Vector_1.Vector.internalBinaryWrite(message.focusForward, writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* bool Unk3300_CDAJJHIPIKH = 12 [json_name = "Unk3300CDAJJHIPIKH"]; */
        if (message.unk3300CDAJJHIPIKH !== false)
            writer.tag(12, runtime_1.WireType.Varint).bool(message.unk3300CDAJJHIPIKH);
        /* bool Unk3300_FHHDDNENEDD = 6 [json_name = "Unk3300FHHDDNENEDD"]; */
        if (message.unk3300FHHDDNENEDD !== false)
            writer.tag(6, runtime_1.WireType.Varint).bool(message.unk3300FHHDDNENEDD);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message EvtAvatarEnterFocusNotify
 */
exports.EvtAvatarEnterFocusNotify = new EvtAvatarEnterFocusNotify$Type();
